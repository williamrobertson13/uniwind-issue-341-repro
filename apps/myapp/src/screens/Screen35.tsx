import { Pressable, Text, View } from 'react-native';

import { copy35 } from '../generated/copy/copy35';
import { layout35 } from '../generated/layouts/layout35';
import { palette35 } from '../generated/palettes/palette35';

export function Screen35() {
	return (
		<View className="flex-row-reverse gap-1 p-5 bg-yellow-100 rounded shadow-lg">
			<View className="size-15 bg-rose-500 rounded-full" />
			<View className={layout35.rhythm} />
			<Pressable className="px-4 py-1 bg-purple-900 active:bg-purple-700 rounded-md">
				<Text className="text-base font-semibold text-gray-900">{copy35.title}</Text>
			</Pressable>
			<Text className="text-sm text-gray-700 italic underline tracking-normal">
				{copy35.detail} / {palette35.name}
			</Text>
		</View>
	);
}
