// Task 1
async function delayedMessage() {
    await new Promise(resolve => setTimeout(resolve, 2000));
    console.log('Promise that resolved after 2 seconds timeout');
}
delayedMessage()

// Task 2
function delayedError() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            reject(new Error('Promise that rejected after 2 seconds timeout'));
        }, 2000);   // 2000 milliseconds = 2 seconds
    });
}
delayedError()
    .then(result => {
        console.log(result);    // This will not be executed since the promise is rejected
    })
    .catch(error => {
        console.error('Caught an error:', error.message);
    });

// Task 3
// for run the task 3 in terminal comment all the above code
function fetchDataWithDelay(delay, message) {
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log(message);
            resolve();
        }, delay);
    });
}
fetchDataWithDelay(1000, 'Fetching data 1 from the server')
    .then(() => fetchDataWithDelay(1500, 'Fetching data 2'))
    .then(() => fetchDataWithDelay(2000, 'Fetching data 3'))
    .then(() => {
        console.log('All data fetched successfully from the server');
    })
    .catch((error) => {
        console.error('Error fetching data:', error);
    });


// Task 4 
// for run the task 4 too in terminal comment all the above code
async function waitForPromise(promise) {
    try {
        const result = await promise;
        console.log('Resolved value:', result);
    } catch (error) {
        console.error('Promise rejected:', error);
    }
}
function fetchData() {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve('Data fetched successfully');
        }, 2000); 
    });
}
waitForPromise(fetchData());

// Task 5
// for run the task 5 too in terminal comment all the above code
async function rejectedPromise(promise) {
    try {
        const result = await promise;
        console.log('Promise resolved:', result);
    } catch (error) {
        console.error('Promise rejected with error:', error.message);
    }
}
function fetchRejectedData() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            reject(new Error('Failed to fetch data'));
        }, 2000); 
    });
}
rejectedPromise(fetchRejectedData());

// Task 6
fetch('https://api.frankfurter.app/currencies')
    .then(response => {
        if (!response.ok) {
            throw new Error('Network response fail');
        }
        return response.json();
    })
    .then(data => {
        console.log('Currencies data:', data);
    })
    .catch(error => {
        console.error('Fetch error:', error);
    });
