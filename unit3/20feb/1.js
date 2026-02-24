const fs = require('fs');

const obfuscatedCode = fs.readFileSync('c:\\Users\\niles\\Downloads\\12409399.txt', 'utf8');

console.log('=== Browser Runtime Analysis ===\n');
console.log('Creating HTML file to execute in browser...\n');

// Create an HTML file that will execute the code and intercept everything
const htmlContent = `<!DOCTYPE html>
<html>
<head>
    <title>Runtime Analyzer</title>
    <script>
        // Interception setup
        const intercepted = {
            strings: [],
            numbers: [],
            domOperations: [],
            networkRequests: []
        };
        
        // Intercept console
        const originalLog = console.log;
        const originalError = console.error;
        console.log = function(...args) {
            const str = args.join(' ');
            intercepted.strings.push(str);
            if (/12409399|12410147/.test(str)) {
                originalLog('🔍 FOUND REGISTRATION IN CONSOLE:', str);
            }
            originalLog.apply(console, args);
        };
        
        console.error = function(...args) {
            const str = args.join(' ');
            intercepted.strings.push(str);
            if (/12409399|12410147/.test(str)) {
                originalError('🔍 FOUND REGISTRATION IN ERROR:', str);
            }
            originalError.apply(console, args);
        };
        
        // Intercept DOM operations
        const originalCreateElement = document.createElement;
        document.createElement = function(tagName) {
            intercepted.domOperations.push(\`createElement(\${tagName})\`);
            return originalCreateElement.call(document, tagName);
        };
        
        // Intercept localStorage
        const originalSetItem = Storage.prototype.setItem;
        Storage.prototype.setItem = function(key, value) {
            if (/12409399|12410147/.test(key) || /12409399|12410147/.test(value)) {
                originalLog('🔍 FOUND REGISTRATION IN localStorage:', key, value);
            }
            return originalSetItem.call(this, key, value);
        };
        
        const originalGetItem = Storage.prototype.getItem;
        Storage.prototype.getItem = function(key) {
            const value = originalGetItem.call(this, key);
            if (/12409399|12410147/.test(key) || /12409399|12410147/.test(value)) {
                originalLog('🔍 FOUND REGISTRATION IN localStorage GET:', key, value);
            }
            return value;
        };
        
        // Intercept URL/location
        const originalAssign = window.location.assign;
        window.location.assign = function(url) {
            if (/12409399|12410147/.test(url)) {
                originalLog('🔍 FOUND REGISTRATION IN URL:', url);
            }
            return originalAssign.call(window.location, url);
        };
        
        // Intercept fetch/XMLHttpRequest
        const originalFetch = window.fetch;
        window.fetch = function(url, options) {
            const urlStr = String(url);
            if (/12409399|12410147/.test(urlStr)) {
                originalLog('🔍 FOUND REGISTRATION IN FETCH URL:', urlStr);
            }
            if (options && options.body) {
                const bodyStr = String(options.body);
                if (/12409399|12410147/.test(bodyStr)) {
                    originalLog('🔍 FOUND REGISTRATION IN FETCH BODY:', bodyStr);
                }
            }
            return originalFetch.apply(window, arguments);
        };
        
        // Intercept all string operations
        const originalToString = String.prototype.toString;
        String.prototype.toString = function() {
            const str = originalToString.call(this);
            if (/12409399|12410147/.test(str) && str.length < 100) {
                originalLog('🔍 FOUND REGISTRATION IN STRING:', str);
            }
            return str;
        };
        
        // Monitor window properties
        const originalDefineProperty = Object.defineProperty;
        Object.defineProperty = function(obj, prop, desc) {
            const valStr = String(desc.value || '');
            if (/12409399|12410147/.test(valStr)) {
                originalLog(\`🔍 FOUND REGISTRATION IN defineProperty(\${String(prop)}):\`, valStr);
            }
            return originalDefineProperty.call(Object, obj, prop, desc);
        };
        
        // Execute the obfuscated code
        try {
            console.log('Executing obfuscated code...');
            ${obfuscatedCode}
            console.log('Execution completed');
        } catch (error) {
            console.error('Execution error:', error.message);
            if (/12409399|12410147/.test(error.message)) {
                originalLog('🔍 FOUND REGISTRATION IN ERROR:', error.message);
            }
        }
        
        // Report results after a delay
        setTimeout(() => {
            console.log('\\n=== Analysis Results ===');
            console.log('Intercepted strings:', intercepted.strings.length);
            console.log('DOM operations:', intercepted.domOperations.length);
            
            const found = intercepted.strings.some(s => /12409399|12410147/.test(s));
            if (!found) {
                console.log('\\n❌ Registration number NOT found in runtime interception');
                console.log('Check browser console for any 🔍 markers');
            }
            
            // Output to page
            document.body.innerHTML = '<h1>Runtime Analysis Complete</h1><p>Check browser console (F12) for results</p>';
        }, 2000);
    </script>
</head>
<body>
    <h1>Runtime Analyzer</h1>
    <p>Open browser console (F12) to see results</p>
</body>
</html>`;

fs.writeFileSync('c:\\Users\\niles\\Downloads\\Flight-Price-Tracker-main\\runtime_test.html', htmlContent);

console.log('✓ Created runtime_test.html');
console.log('\nTo analyze runtime behavior:');
console.log('1. Open runtime_test.html in a web browser');
console.log('2. Open Developer Tools (F12)');
console.log('3. Check the Console tab for any 🔍 markers indicating registration number found');
console.log('\n⚠️  WARNING: This will execute the obfuscated code.');
console.log('   Only run this in a safe, isolated environment.');
