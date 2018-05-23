# Simple KOA Google Vision API

Credits [Google Cloud Vision](https://github.com/GoogleCloudPlatform/cloud-vision)

### To run:
- Duplicate and change name ```config.sample.js``` to `config.js`
- Add your `vision-key.json` and `projectId`
For more info check: [Google Vision Docs](https://cloud.google.com/vision/docs/libraries#using_the_client_library)
```
yarn || npm i
yarn start
```
Labels:
Send post to `/labels` 
Property: `image`: `upload image`

Landmark:
Send post to `/landmark` 
Property: `image`: `upload image`

Text:
Send post to `/text` 
Property: `image`: `upload image`

Face Detection:
Send post to `/face-detection` 
Property: `image`: `upload image`

## Ideas:
- [X] Face Detection
- [X] Landmark Detection
- [X] Text Detection
- [ ] Document Text Detection
- [ ] Swagger Docs
