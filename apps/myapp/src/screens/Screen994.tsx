import { Pressable, Text, View } from 'react-native';

import { copy994 } from '../generated/copy/copy994';
import { layout994 } from '../generated/layouts/layout994';
import { palette994 } from '../generated/palettes/palette994';

export function Screen994() {
	return (
		<View className="flex items-center justify-center p-2 bg-red-50 rounded-md ring-2 ring-red-300">
			<View className="size-14 bg-amber-500 rounded-full" />
			<View className={layout994.rhythm} />
			<Pressable className="px-6 py-1 bg-purple-500 active:bg-purple-700 rounded-md">
				<Text className="text-xl font-bold text-gray-500">{copy994.title}</Text>
			</Pressable>
			<Text className="text-sm text-gray-700 italic underline tracking-normal">
				{copy994.detail} / {palette994.name}
			</Text>
		</View>
	);
}
