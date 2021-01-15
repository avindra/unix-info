# Introduction

![Image of Ken Thompson and Dennis Ritchie at work. Before them, the DEC PDP-7, with a Teletype Model 33 attached](https://www.bell-labs.com/usr/dmr/www/kd14.jpg)

`Unix` is a system created somewhere in the 60s when a solution for [timesharing](https://en.wikipedia.org/wiki/Time-sharing) became an increasing demand for mainframe machines. It was not uncommon to see ungainly computers that so often completely filled up rooms. They were expensive to build and perhaps even more expensive to maintain. So early on, engineers got to work on solving scheduling algorithms for general compute tasks.

The Unix-style system solves problems not only on single-purpose devices, but on networked groups of machines as well. Unix facilitates the clustering of resources through many apis and utilities. Using the Unix system, one can develop very sophisticated software that remains robust, fast, secure and portable.

The distinction between the kernel and the shell paint a very particular use of computing that caters to the user.

In short, this project exists to provide a best-effort attempt to aggregate information about Unix.

## 2020 Briefing

It has been 50 years since the 1970 epoch. The Unix epoch is a common baseline for global timekeeping found in many systems.

Most only get a taste for monolithic IBM machines from media such as Stanley Kubrick's `2001: A Space Odyssey`, and many have not encountered the term "mainframe" in their entire life. A datacenter or any kind of cloud-connected resource is conceptually equivalent to the "mainframe." In general, compute resources may be plenty, but need to be shared amongst many users. The solution to this problem turns out time and time again, to be Unix.

Today, Unix is deployed <em>ubiquitously</em> around the world. All the major branches of Apple's iOS and MacOS, as well as Linux and Android are designed and integrated around the semantics of the unix system. This includes other operating systems derived of Unix such as Solaris (illumos), AIX and every BSD. BSD variants include FreeBSD and NetBSD which are used for example, in computers that do network routing.

Terminal emulators are a thing. Some wonder what are terminals and why do we emulate them. Are these equivalent to a "console"? Technical jargon gets used a lot across the computing business, but this can often obscure meaning and create confusion. If you want to eliminate some of these doubts, continue reading.

<!--
Note: as the audience changes, variant terms may need further substitutions.

The style of this document should be as immutable as possible, and we can
update the briefing as needed to suit the audience.
-->