// RNCKNotificationButtonViewManager.m
#import "RNCKNotificationButtonViewManager.h"
#import "RNCKNotificationButton.h"
@implementation RNCKNotificationButtonViewManager

// 2.
RCT_EXPORT_MODULE(NotificiationButton)

// 3.
- (UIButton *)view
{
    return [[RNCKNotificationButton alloc] initWithFrame:CGRectZero];
}

@end
