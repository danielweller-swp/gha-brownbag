Invoke the cloud function with
```
curl -H "Authorization: bearer $(gcloud auth print-identity-token)" https://us-central1-softwarepark-sandbox.cloudfunctions.net/gha-sandbox-hello-world
```
