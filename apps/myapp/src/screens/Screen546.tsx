import { Pressable, Text, View } from 'react-native';

import { copy546 } from '../generated/copy/copy546';
import { layout546 } from '../generated/layouts/layout546';
import { palette546 } from '../generated/palettes/palette546';

export function Screen546() {
	return (
		<View className="flex items-center justify-center p-2 bg-red-50 rounded-md ring-2 ring-red-300">
			<View className="size-10 bg-blue-700 rounded-full" />
			<View className={layout546.rhythm} />
			<Pressable className="px-2 py-3 bg-purple-700 active:bg-purple-700 rounded-md">
				<Text className="text-xs font-normal text-gray-700">{copy546.title}</Text>
			</Pressable>
			<Text className="text-sm text-gray-700 italic underline tracking-normal">
				{copy546.detail} / {palette546.name}
			</Text>
		</View>
	);
}
