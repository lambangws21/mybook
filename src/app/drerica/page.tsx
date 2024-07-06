"use client";
// import Acromioplaty from "@/app/drerica/acromioplasty/page";
// import ElbowTennis from "@/app/drerica/acromioplasty/page";
// import KneeAcl from "@/app/drerica/acromioplasty/page";
// import KneeMeniscus from "@/app/drerica/acromioplasty/page";
// import OpenReductionCapsul from "@/app/drerica/acromioplasty/page";
// import ProximalHumerus from "@/app/drerica/acromioplasty/page";
// import OrifClavicleDistal from "@/app/drerica/acromioplasty/page";
// import ReleaseExtensor from "@/app/drerica/acromioplasty/page";
// import Shoulder from "@/app/drerica/acromioplasty/page";

import ListItem from '../../components/listitems';

const items = [
  { label: 'Acromioplaty', path: '/drerica/acromioplasty' },
  { label: 'Elbow Tennis', path: '/drerica/elbow-tennis' },
  { label: 'Knee ACL', path: '/drerica/knee-acl' },
  { label: 'Open Reduction Capsular', path: '/drerica/open-reduction-capsular' },
  { label: 'Proximal Humerus', path: '/drerica/proximal-humerus' },
  { label: 'Orif Clavicle Distal', path: '/drerica/orif-clavicle-distal' },
  { label: 'Release Extensor', path: '/drerica/release-extensor' },
  { label: 'Shoulder', path: '/drerica/shoulder' },
];

const MyPage = () => {
  return (
    <div className="text-center -top-0 ml-72">
      <ListItem items={items} />
    </div>
  );
};

export default MyPage;
