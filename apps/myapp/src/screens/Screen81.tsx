import { Pressable, Text, View } from 'react-native';

import { copy81 } from '../generated/copy/copy81';
import { layout81 } from '../generated/layouts/layout81';
import { palette81 } from '../generated/palettes/palette81';

export function Screen81() {
	return (
		<View className="grid grid-cols-2 gap-4 p-3 bg-green-100 rounded-2xl">
			<View className="size-13 bg-emerald-500 rounded-full" />
			<View className={layout81.rhythm} />
			<Pressable className="px-2 py-1 bg-purple-100 active:bg-purple-700 rounded-md">
				<Text className="text-xs font-light text-gray-100">{copy81.title}</Text>
			</Pressable>
			<Text className="text-sm text-gray-700 italic underline tracking-normal">
				{copy81.detail} / {palette81.name}
			</Text>
		</View>
	);
}
