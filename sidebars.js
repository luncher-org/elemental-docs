/**
 * Creating a sidebar enables you to:
        create an ordered group of docs
        render a sidebar for each doc of that group
        provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.
 */

// @ts-check

/** @type {import("@docusaurus/plugin-content-docs").SidebarsConfig} */
const sidebars = {
  // By default, Docusaurus generates a sidebar from the docs folder structure
  "docs": [
    "index",
    {
      "type": "category",
      "collapsible": true,
      "collapsed": false,
      "label": "Quickstarts",
      "items": [
        "quickstart-ui",
        "quickstart-cli"
      ]
    },
    {
      "type": "category",
      "collapsible": true,
      "collapsed": true,
      "label": "Architecture",
      "link": {"type": "doc", "id": "architecture"},
      "items": [
        "architecture-components",
        "custom-resources",
        {
          "type": "category",
          "collapsible": true,
          "collapsed": true,
          "label": "Services",
          "link": {"type": "doc", "id": "architecture-services"},
          "items": [
            "architecture-machineonboarding",
            "architecture-clusterdeployment",
          ]
        },
      ]
    },
    {
      "type": "category",
      "collapsible": true,
      "collapsed": true,
      "label": "Install/Upgrade",
      "items": [
        "installation",
        "upgrade",
        "upgrade-lifecycle",
        "elemental-plans",
      ]
    },
    "authentication",
    {
      "type": "category",
      "collapsible": true,
      "collapsed": true,
      "label": "Label Templates",
      "link": {"type": "doc", "id": "label-templates"},
      "items": [
        "label-templates-baseboard",
        "label-templates-bios",
        "label-templates-chassis",
        "label-templates-cpu",
        "label-templates-gpu",
        "label-templates-memory",
        "label-templates-network",
        "label-templates-product",
        "label-templates-random",
        "label-templates-runtime",
        "label-templates-storage",
        "label-templates-deprecated",
      ]
    },
    {
      "type": "category",
      "collapsible": true,
      "collapsed": true,
      "label": "Declarative Networking",
      "items": [
        "networking",
        "networking-static",
      ]
    },
    {
      "type": "category",
      "collapsible": true,
      "collapsed": true,
      "label": "Reference",
      "items": [
        "cloud-config-reference",
        "machineregistration-reference",
        "machineinventory-reference",
        "machineinventoryselector-reference",
        "machineinventoryselectortemplate-reference",
        "managedosimage-reference",
        "managedosversionchannel-reference",
        "managedosversion-reference",
        "seedimage-reference",
        "cluster-reference",
        "elementaloperatorchart-reference",
        "kubernetesversions",
      ]
    },
    {
      "type": "category",
      "collapsible": true,
      "collapsed": true,
      "label": "Operator",
      "items": [
        "inventory-management",
        "reset",
        "channels",
        "certificate-authority",
      ]
    },
    {
      "type": "category",
      "collapsible": true,
      "collapsed": true,
      "label": "Backup",
      "items": [
        "backup",
        "restore",
      ]
    },
    {
      "type": "category",
      "collapsible": true,
      "collapsed": true,
      "label": "How to",
      "items": [
        "custom-certificate",
        "airgap",
        "custom-images",
        "raspi-disk",
        "ntp",
        {
          "type": "category",
          "collapsible": true,
          "collapsed": true,
          "label": "Customize Elemental Installation",
          "link": {"type": "doc", "id": "custom-install"},
          "items": [
            "extra-rpms",
            "lvm-drives-example"
          ]
        },
        "hostname",
        "elemental_behind_proxy",
        "rancher-vmware",
        "removable-device-cloudconfig",
        "rancher-ip",
        "unmanaged-os",
        "tpm"
      ]
    },
    {
      "type": "category",
      "collapsible": true,
      "collapsed": true,
      "label": 'Troubleshooting',
      "items": [
        {
          "type": "doc",
          "label": "Support",
          "id": "troubleshooting-support",
        },
        {
          "type": "doc",
          "label": "Rancher",
          "id": "troubleshooting-rancher-upgrades",
        },
        {
          "type": "doc",
          "label": "Restore",
          "id": "troubleshooting-restore",
        },
        {
          "type": "doc",
          "label": "Upgrade",
          "id": "troubleshooting-upgrade",
        },
        {
          "type": "doc",
          "label": "Reset",
          "id": "troubleshooting-reset",
        },
        {
          "type": "doc",
          "label": "Declarative Networking",
          "id": "troubleshooting-network",
        },
        {
          "type": "doc",
          "label": "Label Templates",
          "id": "troubleshooting-label-templates",
        },
      ],
    },
    "release-notes",
  ],

  // But you can create a sidebar manually
  /*
  tutorialSidebar: [
    {
      type: "category",
      label: "Tutorial",
      items: ["hello"],
    },
  ],
   */
};

module.exports = sidebars;
