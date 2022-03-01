#import "RCTAppVersionModule.h"

@implementation RCTAppVersionModule

RCT_EXPORT_MODULE()

RCT_EXPORT_METHOD(getAppVersion:(RCTPromiseResolveBlock)resolve 
                  rejecter:(RCTPromiseRejectBlock)reject)
  {
    NSString * appVersionString = [[NSBundle mainBundle] objectForInfoDictionaryKey:@"CFBundleShortVersionString"];
  
    if(appVersionString){
      resolve(appVersionString);
    } else {
      reject(@"failure", @"no app version", nil);
    }
}

@end
