const fs = require('fs');
const path = require('path');

// Read test results
const resultsPath = path.join(__dirname, 'test-results', 'results.json');
const results = JSON.parse(fs.readFileSync(resultsPath, 'utf8'));

// Calculate statistics
const stats = {
  total: results.suites.reduce((sum, suite) => sum + suite.specs.length, 0),
  passed: 0,
  failed: 0,
  skipped: 0,
  totalDuration: 0,
  workers: results.config.workers || 1,
  parallel: results.config.fullyParallel || false,
  tests: []
};

results.suites.forEach(suite => {
  suite.specs.forEach(spec => {
    const test = spec.tests[0];
    const result = test.results[0];
    const status = result.status;
    const duration = result.duration;
    
    if (status === 'passed') stats.passed++;
    else if (status === 'failed') stats.failed++;
    else stats.skipped++;
    
    stats.totalDuration += duration;
    
    stats.tests.push({
      id: spec.title.match(/TC-\d+/)?.[0] || 'N/A',
      name: spec.title,
      file: spec.file.replace(__dirname, ''),
      status: status,
      duration: (duration / 1000).toFixed(2),
      error: result.error?.message || null,
      startTime: new Date(result.startTime).toLocaleString(),
      worker: result.workerIndex !== undefined ? result.workerIndex : 0
    });
  });
});

const passRate = ((stats.passed / stats.total) * 100).toFixed(1);
const totalTime = (stats.totalDuration / 1000).toFixed(2);

// Generate HTML Dashboard
const html = `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>QA Test Automation Dashboard</title>
  <style>
    * { margin: 0; padding: 0; box-sizing: border-box; }
    body {
      font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, sans-serif;
      background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
      padding: 20px;
      min-height: 100vh;
    }
    .container {
      max-width: 1400px;
      margin: 0 auto;
      background: white;
      border-radius: 16px;
      box-shadow: 0 20px 60px rgba(0,0,0,0.3);
      overflow: hidden;
    }
    .header {
      background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
      color: white;
      padding: 40px;
      text-align: center;
    }
    .header h1 {
      font-size: 42px;
      margin-bottom: 10px;
      font-weight: 700;
    }
    .header p {
      font-size: 18px;
      opacity: 0.9;
    }
    .stats-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
      gap: 20px;
      padding: 40px;
      background: #f8f9fa;
    }
    .stat-card {
      background: white;
      padding: 30px;
      border-radius: 12px;
      box-shadow: 0 4px 12px rgba(0,0,0,0.1);
      text-align: center;
      transition: transform 0.2s;
    }
    .stat-card:hover {
      transform: translateY(-5px);
      box-shadow: 0 8px 24px rgba(0,0,0,0.15);
    }
    .stat-value {
      font-size: 48px;
      font-weight: 700;
      margin-bottom: 10px;
    }
    .stat-label {
      font-size: 14px;
      color: #6c757d;
      text-transform: uppercase;
      letter-spacing: 1px;
    }
    .passed { color: #10b981; }
    .failed { color: #ef4444; }
    .total { color: #3b82f6; }
    .duration { color: #f59e0b; }
    .workers { color: #8b5cf6; }
    
    .test-table-container {
      padding: 40px;
    }
    .test-table-container h2 {
      font-size: 28px;
      margin-bottom: 20px;
      color: #1f2937;
    }
    table {
      width: 100%;
      border-collapse: collapse;
      background: white;
      border-radius: 12px;
      overflow: hidden;
      box-shadow: 0 4px 12px rgba(0,0,0,0.1);
    }
    thead {
      background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
      color: white;
    }
    th {
      padding: 18px;
      text-align: left;
      font-weight: 600;
      font-size: 14px;
      text-transform: uppercase;
      letter-spacing: 0.5px;
    }
    td {
      padding: 18px;
      border-bottom: 1px solid #e5e7eb;
    }
    tr:hover {
      background: #f9fafb;
    }
    .status-badge {
      padding: 6px 14px;
      border-radius: 20px;
      font-size: 12px;
      font-weight: 600;
      text-transform: uppercase;
      display: inline-block;
    }
    .status-passed {
      background: #d1fae5;
      color: #065f46;
    }
    .status-failed {
      background: #fee2e2;
      color: #991b1b;
    }
    .test-id {
      font-weight: 600;
      color: #667eea;
    }
    .error-details {
      background: #fee2e2;
      padding: 15px;
      border-radius: 8px;
      margin-top: 10px;
      font-size: 13px;
      color: #991b1b;
      font-family: monospace;
      max-width: 600px;
      overflow-x: auto;
    }
    .execution-mode {
      background: #e0e7ff;
      color: #3730a3;
      padding: 8px 16px;
      border-radius: 20px;
      font-size: 14px;
      font-weight: 600;
      display: inline-block;
      margin-top: 15px;
    }
    .footer {
      background: #f8f9fa;
      padding: 30px;
      text-align: center;
      color: #6c757d;
      font-size: 14px;
    }
    .chart-container {
      padding: 40px;
      background: white;
    }
    .chart-container h2 {
      font-size: 28px;
      margin-bottom: 20px;
      color: #1f2937;
    }
    .progress-bar {
      width: 100%;
      height: 40px;
      background: #e5e7eb;
      border-radius: 20px;
      overflow: hidden;
      display: flex;
      margin-top: 20px;
    }
    .progress-segment {
      height: 100%;
      display: flex;
      align-items: center;
      justify-content: center;
      color: white;
      font-weight: 600;
      font-size: 14px;
    }
    .progress-passed {
      background: #10b981;
    }
    .progress-failed {
      background: #ef4444;
    }
  </style>
</head>
<body>
  <div class="container">
    <div class="header">
      <h1>🎯 QA Test Automation Dashboard</h1>
      <p>Comprehensive Test Execution Report</p>
      <div class="execution-mode">
        Execution Mode: ${stats.parallel ? `⚡ Parallel (${stats.workers} Workers)` : '🔄 Sequential'}
      </div>
    </div>

    <div class="stats-grid">
      <div class="stat-card">
        <div class="stat-value total">${stats.total}</div>
        <div class="stat-label">Total Tests</div>
      </div>
      <div class="stat-card">
        <div class="stat-value passed">${stats.passed}</div>
        <div class="stat-label">Passed</div>
      </div>
      <div class="stat-card">
        <div class="stat-value failed">${stats.failed}</div>
        <div class="stat-label">Failed</div>
      </div>
      <div class="stat-card">
        <div class="stat-value duration">${totalTime}s</div>
        <div class="stat-label">Total Duration</div>
      </div>
      <div class="stat-card">
        <div class="stat-value workers">${passRate}%</div>
        <div class="stat-label">Pass Rate</div>
      </div>
    </div>

    <div class="chart-container">
      <h2>📊 Test Results Overview</h2>
      <div class="progress-bar">
        <div class="progress-segment progress-passed" style="width: ${passRate}%">
          ${stats.passed} Passed
        </div>
        <div class="progress-segment progress-failed" style="width: ${100 - passRate}%">
          ${stats.failed} Failed
        </div>
      </div>
    </div>

    <div class="test-table-container">
      <h2>📋 Detailed Test Results</h2>
      <table>
        <thead>
          <tr>
            <th>Test ID</th>
            <th>Test Name</th>
            <th>Status</th>
            <th>Duration</th>
            <th>Worker</th>
            <th>Start Time</th>
          </tr>
        </thead>
        <tbody>
          ${stats.tests.map(test => `
            <tr>
              <td class="test-id">${test.id}</td>
              <td>
                ${test.name}
                <br><small style="color: #6c757d;">${test.file}</small>
                ${test.error ? `<div class="error-details">❌ ${test.error}</div>` : ''}
              </td>
              <td>
                <span class="status-badge status-${test.status}">
                  ${test.status === 'passed' ? '✓' : '✗'} ${test.status}
                </span>
              </td>
              <td>${test.duration}s</td>
              <td>Worker #${test.worker}</td>
              <td>${test.startTime}</td>
            </tr>
          `).join('')}
        </tbody>
      </table>
    </div>

    <div class="footer">
      <p>Generated on ${new Date().toLocaleString()}</p>
      <p>Playwright TypeScript Automation Framework v1.0.0</p>
    </div>
  </div>
</body>
</html>
`;

// Write dashboard HTML
const dashboardPath = path.join(__dirname, 'test-results', 'dashboard.html');
fs.writeFileSync(dashboardPath, html);

console.log(`\n✅ Dashboard generated successfully!`);
console.log(`📊 Location: ${dashboardPath}`);
console.log(`\n📈 Test Summary:`);
console.log(`   Total Tests: ${stats.total}`);
console.log(`   Passed: ${stats.passed}`);
console.log(`   Failed: ${stats.failed}`);
console.log(`   Pass Rate: ${passRate}%`);
console.log(`   Total Duration: ${totalTime}s`);
console.log(`   Execution Mode: ${stats.parallel ? `Parallel (${stats.workers} workers)` : 'Sequential'}\n`);
