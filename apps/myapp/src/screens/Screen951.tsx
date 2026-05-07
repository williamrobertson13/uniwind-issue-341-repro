import { Pressable, Text, View } from 'react-native';

import { copy951 } from '../generated/copy/copy951';
import { layout951 } from '../generated/layouts/layout951';
import { palette951 } from '../generated/palettes/palette951';

export function Screen951() {
	return (
		<View className="flex-row gap-2 p-4 bg-gray-100 rounded-lg shadow-md">
			<View className="size-7 bg-blue-400 rounded-full" />
			<View className={layout951.rhythm} />
			<Pressable className="px-2 py-3 bg-purple-700 active:bg-purple-700 rounded-md">
				<Text className="text-xs font-normal text-gray-700">{copy951.title}</Text>
			</Pressable>
			<Text className="text-sm text-gray-700 italic underline tracking-normal">
				{copy951.detail} / {palette951.name}
			</Text>
		</View>
	);
}
