// RNCKNotificationButtonViewManager.m
#import "RNCKNotificationButtonViewManager.h"
#import "RNCKNotificiationButton.h"
@implementation RNCKNotificationButtonViewManager

// 2.
RCT_EXPORT_MODULE(NotificiationButton)

// 3.
- (UIButton *)view
{
    return [[RNCKNotificiationButton alloc] initWithFrame:CGRectZero];
}

@end