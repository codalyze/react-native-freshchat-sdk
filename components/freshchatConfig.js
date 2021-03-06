class FreshchatConfig {

    constructor(appId, appKey, domain = "https://msdk.in.freshchat.com") {

        // TODO: expose stringsBundle to be used in iOS wrapper - muthu

        this.appId = appId;  //TODO: Can we have non nullable ?
        this.appKey = appKey;  //TODO: Can we have non nullable ?

        this.domain = domain;
        this.themeName = null;
        this.stringsBundle = null;
        this.teamMemberInfoVisible = true;
        this.cameraCaptureEnabled = true;
        this.gallerySelectionEnabled = true;
        this.responseExpectationEnabled = true;
        this.showNotificationBanner = true; //iOS only
        this.notificationSoundEnabled = true; //iOS only

        Object.preventExtensions(this);
    }
}

export default FreshchatConfig;
