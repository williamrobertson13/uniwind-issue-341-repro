import { Pressable, Text, View } from 'react-native';

import { copy882 } from '../generated/copy/copy882';
import { layout882 } from '../generated/layouts/layout882';
import { palette882 } from '../generated/palettes/palette882';

export function Screen882() {
	return (
		<View className="flex items-center justify-center p-2 bg-red-50 rounded-md ring-2 ring-red-300">
			<View className="size-10 bg-blue-700 rounded-full" />
			<View className={layout882.rhythm} />
			<Pressable className="px-2 py-1 bg-purple-100 active:bg-purple-700 rounded-md">
				<Text className="text-xs font-light text-gray-100">{copy882.title}</Text>
			</Pressable>
			<Text className="text-sm text-gray-700 italic underline tracking-normal">
				{copy882.detail} / {palette882.name}
			</Text>
		</View>
	);
}
