import BasePage from './BasePage.js'

class Camera extends BasePage {
  get continueButton() { return this.$('.onfido-sdk-ui-Button-button-primary')}
  get shutterButton() { return this.$('.onfido-sdk-ui-Photo-btn')}
  get recordButton() { return this.$('.onfido-sdk-ui-Video-startRecording')}
  get stopButton() { return this.$('.onfido-sdk-ui-Video-stopRecording') }

  async takeSelfie() {
    this.driver.sleep(2000)
    this.shutterButton.click()
  }

  async startVideoRecording() {
    this.continueButton.click()
    this.recordButton.click()
  }

  async completeChallenges() {
    this.continueButton.click()
    this.stopButton.click()
  }
}

export default Camera