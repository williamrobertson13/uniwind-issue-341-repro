import { Pressable, Text, View } from 'react-native';

import { copy234 } from '../generated/copy/copy234';
import { layout234 } from '../generated/layouts/layout234';
import { palette234 } from '../generated/palettes/palette234';

export function Screen234() {
	return (
		<View className="flex items-center justify-center p-2 bg-red-50 rounded-md ring-2 ring-red-300">
			<View className="size-10 bg-blue-700 rounded-full" />
			<View className={layout234.rhythm} />
			<Pressable className="px-2 py-1 bg-purple-100 active:bg-purple-700 rounded-md">
				<Text className="text-xs font-light text-gray-100">{copy234.title}</Text>
			</Pressable>
			<Text className="text-sm text-gray-700 italic underline tracking-normal">
				{copy234.detail} / {palette234.name}
			</Text>
		</View>
	);
}
