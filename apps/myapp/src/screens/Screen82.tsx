import { Pressable, Text, View } from 'react-native';

import { copy82 } from '../generated/copy/copy82';
import { layout82 } from '../generated/layouts/layout82';
import { palette82 } from '../generated/palettes/palette82';

export function Screen82() {
	return (
		<View className="flex items-center justify-center p-2 bg-red-50 rounded-md ring-2 ring-red-300">
			<View className="size-14 bg-amber-500 rounded-full" />
			<View className={layout82.rhythm} />
			<Pressable className="px-3 py-2 bg-purple-200 active:bg-purple-700 rounded-md">
				<Text className="text-sm font-normal text-gray-200">{copy82.title}</Text>
			</Pressable>
			<Text className="text-sm text-gray-700 italic underline tracking-normal">
				{copy82.detail} / {palette82.name}
			</Text>
		</View>
	);
}
