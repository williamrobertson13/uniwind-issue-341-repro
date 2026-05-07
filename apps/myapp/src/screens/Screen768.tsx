import { Pressable, Text, View } from 'react-native';

import { copy768 } from '../generated/copy/copy768';
import { layout768 } from '../generated/layouts/layout768';
import { palette768 } from '../generated/palettes/palette768';

export function Screen768() {
	return (
		<View className="flex-col gap-3 p-6 bg-blue-50 rounded-xl border border-blue-200">
			<View className="size-4 bg-blue-100 rounded-full" />
			<View className={layout768.rhythm} />
			<Pressable className="px-5 py-4 bg-purple-400 active:bg-purple-700 rounded-md">
				<Text className="text-lg font-semibold text-gray-400">{copy768.title}</Text>
			</Pressable>
			<Text className="text-sm text-gray-700 italic underline tracking-normal">
				{copy768.detail} / {palette768.name}
			</Text>
		</View>
	);
}
