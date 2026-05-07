import { Pressable, Text, View } from 'react-native';

import { copy310 } from '../generated/copy/copy310';
import { layout310 } from '../generated/layouts/layout310';
import { palette310 } from '../generated/palettes/palette310';

export function Screen310() {
	return (
		<View className="relative flex p-8 bg-indigo-50 rounded shadow-2xl">
			<View className="size-14 bg-amber-500 rounded-full" />
			<View className={layout310.rhythm} />
			<Pressable className="px-6 py-1 bg-purple-500 active:bg-purple-700 rounded-md">
				<Text className="text-xl font-bold text-gray-500">{copy310.title}</Text>
			</Pressable>
			<Text className="text-sm text-gray-700 italic underline tracking-normal">
				{copy310.detail} / {palette310.name}
			</Text>
		</View>
	);
}
