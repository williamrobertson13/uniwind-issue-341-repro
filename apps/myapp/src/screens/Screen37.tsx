import { Pressable, Text, View } from 'react-native';

import { copy37 } from '../generated/copy/copy37';
import { layout37 } from '../generated/layouts/layout37';
import { palette37 } from '../generated/palettes/palette37';

export function Screen37() {
	return (
		<View className="absolute inset-0 p-4 bg-pink-100 rounded-full opacity-90">
			<View className="size-5 bg-blue-200 rounded-full" />
			<View className={layout37.rhythm} />
			<Pressable className="px-3 py-2 bg-purple-200 active:bg-purple-700 rounded-md">
				<Text className="text-sm font-normal text-gray-200">{copy37.title}</Text>
			</Pressable>
			<Text className="text-sm text-gray-700 italic underline tracking-normal">
				{copy37.detail} / {palette37.name}
			</Text>
		</View>
	);
}
