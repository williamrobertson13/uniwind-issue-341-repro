import { Pressable, Text, View } from 'react-native';

import { copy738 } from '../generated/copy/copy738';
import { layout738 } from '../generated/layouts/layout738';
import { palette738 } from '../generated/palettes/palette738';

export function Screen738() {
	return (
		<View className="flex items-center justify-center p-2 bg-red-50 rounded-md ring-2 ring-red-300">
			<View className="size-10 bg-blue-700 rounded-full" />
			<View className={layout738.rhythm} />
			<Pressable className="px-2 py-1 bg-purple-100 active:bg-purple-700 rounded-md">
				<Text className="text-xs font-light text-gray-100">{copy738.title}</Text>
			</Pressable>
			<Text className="text-sm text-gray-700 italic underline tracking-normal">
				{copy738.detail} / {palette738.name}
			</Text>
		</View>
	);
}
