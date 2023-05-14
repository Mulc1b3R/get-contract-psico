import AppForm from "../components/AppForm";
import AppPreviewContract from "../components/AppPreviewContract";
import React from 'react';

const HomePage = () => {
  return (
    <div>
      {/* The rest of your app's UI */}
      <a className="remix-link" href="https://remix.org" target="_blank" rel="noopener noreferrer">
        Go to remix.org
      </a>
    </div> 
  );
};





 
   
      
      



export default function Home() {
  return (
    <div>
      <div className="mx-auto w-full max-w-md py-10">
        <AppForm />
      </div>
      <AppPreviewContract />
    </div>
  );
}
