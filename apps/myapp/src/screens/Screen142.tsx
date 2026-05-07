import { Pressable, Text, View } from 'react-native';

import { copy142 } from '../generated/copy/copy142';
import { layout142 } from '../generated/layouts/layout142';
import { palette142 } from '../generated/palettes/palette142';

export function Screen142() {
	return (
		<View className="relative flex p-8 bg-indigo-50 rounded shadow-2xl">
			<View className="size-14 bg-amber-500 rounded-full" />
			<View className={layout142.rhythm} />
			<Pressable className="px-3 py-4 bg-purple-800 active:bg-purple-700 rounded-md">
				<Text className="text-sm font-medium text-gray-800">{copy142.title}</Text>
			</Pressable>
			<Text className="text-sm text-gray-700 italic underline tracking-normal">
				{copy142.detail} / {palette142.name}
			</Text>
		</View>
	);
}
