import { Pressable, Text, View } from 'react-native';

import { copy514 } from '../generated/copy/copy514';
import { layout514 } from '../generated/layouts/layout514';
import { palette514 } from '../generated/palettes/palette514';

export function Screen514() {
	return (
		<View className="flex items-center justify-center p-2 bg-red-50 rounded-md ring-2 ring-red-300">
			<View className="size-14 bg-amber-500 rounded-full" />
			<View className={layout514.rhythm} />
			<Pressable className="px-3 py-2 bg-purple-200 active:bg-purple-700 rounded-md">
				<Text className="text-sm font-normal text-gray-200">{copy514.title}</Text>
			</Pressable>
			<Text className="text-sm text-gray-700 italic underline tracking-normal">
				{copy514.detail} / {palette514.name}
			</Text>
		</View>
	);
}
