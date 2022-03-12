Pull request description:

  This is not for 23.0, but for 24.0. It comes with the following benefits:

  * Can use C++17 P0083R3 std::set::merge from libc++ 8.0
  * No longer need to provide support for clang-7, which already fails to compile on some architectures (#21294 (comment))

  This should be fine, given that all supported operating systems ship with at least clang-10:

  * CentOS 8: clang-12
  * Stretch: https://packages.debian.org/stretch/clang-11
  * Buster: https://packages.debian.org/buster-backports/clang-11
  * Bionic: https://packages.ubuntu.com/bionic-updates/clang-10
  * Focal: https://packages.ubuntu.com/focal/clang-10

ACKs for top commit:
  fanquake:
    ACK fae20e6 - I think this is fine to do. I would be surprised if in another 6 months time someone was stuck on a system we supported, needing to compile Core, and only had access to Clang 7 or older. As mentioned in the PR description, all systems we currently support, already support multiple newer versions of Clang.
  hebasto:
    ACK fae20e6, I have reviewed the code and it looks OK, I agree it can be merged.

Tree-SHA512: 3b4c6c130ff40dd7e84934af076863415e5dd661d823c72e3e3832566c65be6e877a7ef9164bbcf394bcea4b897fc29a48db0f231c22ace0e2c9b5638659a628
