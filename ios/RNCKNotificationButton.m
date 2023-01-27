#import "RNCKNotificationButton.h"

@implementation RNCKNotificationButton

- (instancetype)initWithFrame:(CGRect)frame
{
  self = [super initWithFrame:frame];

  if (self) {
    [self addTarget:self action:@selector(handleOnPress) forControlEvents:UIControlEventTouchUpInside];
  }

  return self;
}

- (void)handleOnPress {
  self.onPress([NSDictionary dictionary]);
}

@end
