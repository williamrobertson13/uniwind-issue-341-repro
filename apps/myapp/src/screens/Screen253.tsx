import { Pressable, Text, View } from 'react-native';

import { copy253 } from '../generated/copy/copy253';
import { layout253 } from '../generated/layouts/layout253';
import { palette253 } from '../generated/palettes/palette253';

export function Screen253() {
	return (
		<View className="absolute inset-0 p-4 bg-pink-100 rounded-full opacity-90">
			<View className="size-5 bg-blue-200 rounded-full" />
			<View className={layout253.rhythm} />
			<Pressable className="px-3 py-2 bg-purple-200 active:bg-purple-700 rounded-md">
				<Text className="text-sm font-normal text-gray-200">{copy253.title}</Text>
			</Pressable>
			<Text className="text-sm text-gray-700 italic underline tracking-normal">
				{copy253.detail} / {palette253.name}
			</Text>
		</View>
	);
}
