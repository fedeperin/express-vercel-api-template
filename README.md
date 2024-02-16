# Express Vercel API Template
A template of a REST API using Express js with everything configured to deploy using vercel serverless functions.  
This template if for public APIs, it has CORS disabled.  
Also used dotenv to handle the .env file.  
``index.js`` is the principal file, do not touch ``server.js`` or ``api/index.js``  
Take out ``.gitkeep`` file of  ``/public`` if it has any content. This folder is for static files.  
Having the ``index.js`` and the ``server.js`` is only to make it easier then to add testing.