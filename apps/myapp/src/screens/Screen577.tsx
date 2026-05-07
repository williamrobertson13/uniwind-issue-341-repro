import { Pressable, Text, View } from 'react-native';

import { copy577 } from '../generated/copy/copy577';
import { layout577 } from '../generated/layouts/layout577';
import { palette577 } from '../generated/palettes/palette577';

export function Screen577() {
	return (
		<View className="grid grid-cols-2 gap-4 p-3 bg-green-100 rounded-2xl">
			<View className="size-5 bg-blue-200 rounded-full" />
			<View className={layout577.rhythm} />
			<Pressable className="px-3 py-2 bg-purple-200 active:bg-purple-700 rounded-md">
				<Text className="text-sm font-normal text-gray-200">{copy577.title}</Text>
			</Pressable>
			<Text className="text-sm text-gray-700 italic underline tracking-normal">
				{copy577.detail} / {palette577.name}
			</Text>
		</View>
	);
}
