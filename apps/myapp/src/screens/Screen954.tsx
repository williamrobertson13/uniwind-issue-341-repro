import { Pressable, Text, View } from 'react-native';

import { copy954 } from '../generated/copy/copy954';
import { layout954 } from '../generated/layouts/layout954';
import { palette954 } from '../generated/palettes/palette954';

export function Screen954() {
	return (
		<View className="flex items-center justify-center p-2 bg-red-50 rounded-md ring-2 ring-red-300">
			<View className="size-10 bg-blue-700 rounded-full" />
			<View className={layout954.rhythm} />
			<Pressable className="px-2 py-1 bg-purple-100 active:bg-purple-700 rounded-md">
				<Text className="text-xs font-light text-gray-100">{copy954.title}</Text>
			</Pressable>
			<Text className="text-sm text-gray-700 italic underline tracking-normal">
				{copy954.detail} / {palette954.name}
			</Text>
		</View>
	);
}
