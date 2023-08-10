"use client";

import Link from "next/link";
import React from "react";
import { usePathname } from "next/navigation";
import classNames from "../utils/classNames";

const NavLink = ({
  children,
  href,
  exact = false,
  activeClassName,
  ...props
}) => {
  const path = usePathname();
  const active = exact ? path === href : path.startsWith(href);

  // active && activeClassName means if path is active then execute activeClassName , if path isn't active then it turns out false which will filter out in classNames utility function

  const classes = classNames(props.className, active && activeClassName);

  console.log("classes : ", classes);
  console.log("props : ", props);
  console.log("path : ", path);
  //   if we got classes then set it to className under props
  if (classes) {
    props.className = classes;
  }

  return (
    <Link href={href} {...props}>
      {children}
    </Link>
  );
};

export default NavLink;
