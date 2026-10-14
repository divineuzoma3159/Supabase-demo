import { createClient } from 'https://esm.sh/@supabase/supabase-js'//Just use ts when doing nornmal HTML

const supabaseUrl = 'https://etmamijbenugopzblvzf.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImV0bWFtaWpiZW51Z29wemJsdnpmIiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODI2NzM4NTEsImV4cCI6MjA5ODI0OTg1MX0.3Ta5FvMiul2Xn83mzErD_kMq3n4dMqatRCYGiyp-55A';
const supabase = createClient(supabaseUrl, supabaseKey);


const signupBtn = document.getElementById('signupBtn');
const loginBtn = document.getElementById('loginBtn');
const logoutBtn = document.getElementById('logoutBtn');


signupBtn.addEventListener('click', async () => {
    const email = document.getElementById('myEmail').value;
    const password = document.getElementById('myPassword').value;

    const { data, error } = await supabase.auth.signUp({
        email: email,
        password: password, 
    });

    if (error) {
        alert(`Error signing up: ${error.message}`);
    } else {
        alert(`User signed up: ${data.user.email}`);
    }
}
);

loginBtn.addEventListener('click', async () => {
    const email = document.getElementById('myEmail1').value;
    const password = document.getElementById('myPassword1').value;

    const { data, error } = await supabase.auth.signInWithPassword({
        email: email,
        password: password,
    });

    if(error) {
        alert(`Error logging in: ${error.message}`);
    } else {
        alert(`User logged in: ${data.user.email}`);
        document.getElementById('welMessage').textContent = `Welcome back to the project ${data.user.email}!`;
    }   

    
});

logoutBtn.addEventListener('click', async () => {
    const { error } = await supabase.auth.signOut();
    if(error){
        alert(`User couldn't be logged out ${error.message}`)
    }else{
    document.getElementById('welMessage').textContent = '';
    alert('User logged out');
    }
});


// const btn = document.getElementById('btn');
// const para = document.getElementById('para');

// btn.addEventListener('click', async () => { 

//     const {data, error} = await supabase
//     .from('smoothies')
//     .select('*');

//     if(error) {
//         para.textContent = 'Error loading data';
//         console.log(error);
//     }else {
//         para.innerHTML = "Supabase is connected successdully!"
//         console.log(data);
//     }

// })