# History

`Unix` is a system created somewhere in the 60s when a solution for [time-sharing](https://en.wikipedia.org/wiki/Time-sharing) was desired for mainframes. A datacenter can be viewed as the imminent allegory of the 'mainframe'. Terminal emulators are still around, and if you want to know why, it helps to know the history.

The Unix-style system has been shown to solve problems single-purpose devices, "server farm" type compute centers, and more. It is imminently worth knowing because of its ubiquitous deployment around the world.

# Learn more

Fortunately, there are many good primary sources of information about Unix available freely online. Here are a few:

* 1971: [Unix Programmer's Manual (_1st_ ed)](https://www.bell-labs.com/usr/dmr/www/1stEdman.html) ([1983 edition](https://www.livingcomputers.org/UI/UserDocs/Unix-v7-1/UNIX_Programmers_Manual_Seventh_Edition_Vol_2_1983.pdf))
  * by [Ken Thompson](http://cs.bell-labs.co/who/ken/) and Dennis Ritchie
  * first edition before pipes and grep were invented
  * [read more about the early documentation history](https://en.wikipedia.org/wiki/Man_page#History)
* 1976: [The Unix Command Language](https://archive.org/download/the-unix-command-language/the-unix-command-language.pdf) ([more info](https://github.com/susam/tucl#combined-pdf))
  * by Ken Thompson
* 1978: [UNIX Time-Sharing System](https://archive.org/details/bstj57-6-1899/mode/2up)
  * Transcribed to [HTML](https://danluu.com/mcilroy-unix/)
  * Featured in an August edition of [Bell System Technical Journal (BSTJ)](https://en.wikipedia.org/wiki/Bell_Labs_Technical_Journal).
* 1981: [Computer Aids for Writers](https://archive.org/details/sigplan-sigoa-text-manipulation/page/n67/mode/2up) ([ACM](https://dl.acm.org/doi/abs/10.1145/872730.806455?originalServiceName=showPdf))
  * by [Lorinda Cherry](https://www.princeton.edu/~hos/frs122/precis/cherry1.htm)
  * Transcribed to [HTML](https://www.mirbsd.org/htman/i386/manUSD/29.diction.htm), from a MirBSD man page on diction
* 1982: _The UNIX System_ a 2-part VHS video from Bell Labs, produced by [EWB Productions, Inc.](https://opencorporates.com/companies/us_nj/0100098790). ([Worldcat](http://www.worldcat.org/identities/nc-ewb%20productions%20inc/))
  * [_Making Computers More Productive_](https://www.youtube.com/watch?v=tc4ROCJYbm0)
    * Roughly half-hour length
    * Brian Kernighan explains and demonstrates the pipeline
    * Dennis Ritchie is briefly seen explaining a few topics, including input/output redirection.
  * [_Making Computers Easier to Use_](https://www.youtube.com/watch?v=XvDZLjaCJuw)
    * A shorter cut probably aimed at a more general audience
    * Kernighan's pipeline explanation is redone in discrete steps, with intermediate results stored to output files.
    * Contains additional explanations not found in the other video
    * Some employees featured are exclusively seen in this video
* 1984: [The UNIX Programming Environment](https://archive.org/details/UnixProgrammingEnviornment/page/n1/mode/2up)
  * by Kernighan and Rob Pike.
* 1984: [Reflections on Trusting Trust](https://www.win.tue.nl/~aeb/linux/hh/thompson/trust.html)
  * by Ken Thompson
  * Multi-stage compiler backdoor hack presented at acceptance of an ACM award
* 1985: [_The Computer Chronicles: UNIX_](https://archive.org/details/UNIX1985)
  * John Mashey, manager from Bell Labs video, is seen again, 3 years later.
  * He moved to [MIPS](https://en.wikipedia.org/wiki/MIPS_Technologies) in the same year of video production.
* 1993: [The Development of the C Language](http://www.bell-labs.com/usr/dmr/www/chist.pdf)
  * by Dennis Ritchie, principal creator of C
* 2003: [Unix: An Oral History](http://www.princeton.edu/~hos/frs122/unixhist/oralhistory.htm)
  * collection of writings from a Princeton University course on the development, ethos, and other topics surrounding Unix
* 2004: [Languages, Levels, Libraries, and Longevity](https://dl.acm.org/ft_gateway.cfm?id=1039532&ftid=297456&dwn=1)
  * written by [John Mashey](https://twitter.com/johnmashey)
  * covers computer language development at Bell Labs
* 2011: [/usr/dmr/www](https://www.bell-labs.com/usr/dmr/www/)
  * Dennis Ritchie's website

## Early history

To gain a deeper understanding, it helps to understand the context Unix was developed within.

Note that objects before 1970 are pre-Unix and might be considered prior art:

* 1961: [CTSS](https://en.wikipedia.org/wiki/Compatible_Time-Sharing_System), an early timesharing system from MIT
  * first presented in 1962
* 1969: [Multics](https://en.wikipedia.org/wiki/Multics)
  * Ken and Dennis were both Multics programmers
* 1973: ([YouTube](https://www.youtube.com/watch?v=HMYiktO0D64)) [The Holmdel Computer Center, Part 1](https://techchannel.att.com/playvideo/2012/11/28/AT&T-Archives-Holmdel-Computer-Center-Part-1)
  * Computations as a printout on sheet(s) of paper are placed into the user's bin by an attendant
  * [S/370](https://en.wikipedia.org/wiki/IBM_System/370) (later replaced by [S390](https://en.wikipedia.org/wiki/IBM_System/390)) was the main timesharing computer
* 1973: ([YouTube](https://www.youtube.com/watch?v=V9aVOIuKVUc)) [The Holmdel Computer Center, Part 2: Programmer Services](https://techchannel.att.com/playvideo/2012/11/28/AT&T-Archives-Holmdel-Computer-Center-Part-2)


## Miscellaneous

* 1982: ([YouTube](https://www.youtube.com/watch?v=Pr1XXvSaVUQ)) [_BLIT_](https://techchannel.att.com/playvideo/2012/08/27/AT&T-Archives-BLIT-UNIX-GUI).
  * An early Graphical User Interface (GUI) created by Rob Pike and Bart Locanthi for Unix.
* 1985: [Munix, Vol III](https://archive.org/details/h42_PCS_MUNIX_Volume_III/mode/2up)
  * [Munix](https://de.wikipedia.org/wiki/MUNIX), created by [a German company called PCS](https://en.wikipedia.org/wiki/Periphere_Computer_Systeme) based on SystemV Unix. [Hubbard](https://en.wikipedia.org/wiki/Jordan_Hubbard) would go on to help create FreeBSD.
* 1989: [_The Computer Chronicles: UNIX_](https://archive.org/details/unix_2)
  * 2nd episode on UNIX, 4 years after the first
  * large segment on GUIs, one from Sun Microsystems and another from HP
  * some challenges are described,

## Source code

Unix was developed before modern SCMs such as Git came about, but it has since been [ported to Git](https://github.com/dspinellis/unix-history-repo/tree/master).

 * [Build tree](https://github.com/dspinellis/unix-history-make#unix-history-repository) to see how the repos are generated
 * Branches correspond to various versions/releases of Unix
