import { Pressable, Text, View } from 'react-native';

import { copy970 } from '../generated/copy/copy970';
import { layout970 } from '../generated/layouts/layout970';
import { palette970 } from '../generated/palettes/palette970';

export function Screen970() {
	return (
		<View className="flex items-center justify-center p-2 bg-red-50 rounded-md ring-2 ring-red-300">
			<View className="size-14 bg-amber-500 rounded-full" />
			<View className={layout970.rhythm} />
			<Pressable className="px-3 py-4 bg-purple-800 active:bg-purple-700 rounded-md">
				<Text className="text-sm font-medium text-gray-800">{copy970.title}</Text>
			</Pressable>
			<Text className="text-sm text-gray-700 italic underline tracking-normal">
				{copy970.detail} / {palette970.name}
			</Text>
		</View>
	);
}
