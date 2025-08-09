import os
from typing import Optional

import boto3

S3_BUCKET = os.getenv("S3_BUCKET", "example")
S3_REGION = os.getenv("S3_REGION", "us-east-1")

_s3 = boto3.client("s3", region_name=S3_REGION)

def get_presigned_url(key: str, expires_in: int = 3600, content_type: Optional[str] = None) -> str:
    params = {"Bucket": S3_BUCKET, "Key": key}
    if content_type:
        params["ContentType"] = content_type
    return _s3.generate_presigned_url(
        ClientMethod="put_object",
        Params=params,
        ExpiresIn=expires_in,
    )
