import { Pressable, Text, View } from 'react-native';

import { copy333 } from '../generated/copy/copy333';
import { layout333 } from '../generated/layouts/layout333';
import { palette333 } from '../generated/palettes/palette333';

export function Screen333() {
	return (
		<View className="absolute inset-0 p-4 bg-pink-100 rounded-full opacity-90">
			<View className="size-13 bg-emerald-500 rounded-full" />
			<View className={layout333.rhythm} />
			<Pressable className="px-2 py-1 bg-purple-100 active:bg-purple-700 rounded-md">
				<Text className="text-xs font-light text-gray-100">{copy333.title}</Text>
			</Pressable>
			<Text className="text-sm text-gray-700 italic underline tracking-normal">
				{copy333.detail} / {palette333.name}
			</Text>
		</View>
	);
}
