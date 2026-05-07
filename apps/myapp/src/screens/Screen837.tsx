import { Pressable, Text, View } from 'react-native';

import { copy837 } from '../generated/copy/copy837';
import { layout837 } from '../generated/layouts/layout837';
import { palette837 } from '../generated/palettes/palette837';

export function Screen837() {
	return (
		<View className="absolute inset-0 p-4 bg-pink-100 rounded-full opacity-90">
			<View className="size-13 bg-emerald-500 rounded-full" />
			<View className={layout837.rhythm} />
			<Pressable className="px-2 py-1 bg-purple-100 active:bg-purple-700 rounded-md">
				<Text className="text-xs font-light text-gray-100">{copy837.title}</Text>
			</Pressable>
			<Text className="text-sm text-gray-700 italic underline tracking-normal">
				{copy837.detail} / {palette837.name}
			</Text>
		</View>
	);
}
