#import <Foundation/Foundation.h>

#if __has_attribute(swift_private)
#define AC_SWIFT_PRIVATE __attribute__((swift_private))
#else
#define AC_SWIFT_PRIVATE
#endif

/// The "AppLogo" asset catalog image resource.
static NSString * const ACImageNameAppLogo AC_SWIFT_PRIVATE = @"AppLogo";

/// The "CertsLogo" asset catalog image resource.
static NSString * const ACImageNameCertsLogo AC_SWIFT_PRIVATE = @"CertsLogo";

/// The "DownloadsLogo" asset catalog image resource.
static NSString * const ACImageNameDownloadsLogo AC_SWIFT_PRIVATE = @"DownloadsLogo";

/// The "PairingLogo" asset catalog image resource.
static NSString * const ACImageNamePairingLogo AC_SWIFT_PRIVATE = @"PairingLogo";

#undef AC_SWIFT_PRIVATE
