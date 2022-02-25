#import <Foundation/Foundation.h>
#import "Image.h"
#import "AppDelegate.h"
#import "MobilePairingSession-Swift.h"

@implementation Image

RCT_EXPORT_MODULE(Image)

- (dispatch_queue_t)methodQueue
{
  return dispatch_get_main_queue();
}

RCT_EXPORT_METHOD(navigate)
{
  UIStoryboard *storyboard = [UIStoryboard storyboardWithName:@"Main" bundle:nil];
  ImageViewController *imageVC = [storyboard instantiateViewControllerWithIdentifier:@"ImageViewController"];
  
  AppDelegate *appDelegate = (AppDelegate *)[UIApplication sharedApplication].delegate;
  [appDelegate.navigationController pushViewController:imageVC animated:YES];
}

@end
