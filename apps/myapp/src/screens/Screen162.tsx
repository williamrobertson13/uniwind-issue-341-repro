import { Pressable, Text, View } from 'react-native';

import { copy162 } from '../generated/copy/copy162';
import { layout162 } from '../generated/layouts/layout162';
import { palette162 } from '../generated/palettes/palette162';

export function Screen162() {
	return (
		<View className="flex items-center justify-center p-2 bg-red-50 rounded-md ring-2 ring-red-300">
			<View className="size-10 bg-blue-700 rounded-full" />
			<View className={layout162.rhythm} />
			<Pressable className="px-2 py-1 bg-purple-100 active:bg-purple-700 rounded-md">
				<Text className="text-xs font-light text-gray-100">{copy162.title}</Text>
			</Pressable>
			<Text className="text-sm text-gray-700 italic underline tracking-normal">
				{copy162.detail} / {palette162.name}
			</Text>
		</View>
	);
}
