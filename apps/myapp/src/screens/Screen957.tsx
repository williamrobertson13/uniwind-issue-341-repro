import { withUniwind, useCSSVariable, useResolveClassNames } from 'uniwind';
import { Pressable, Text, View } from 'uniwind/components';

import { copy957 } from '../generated/copy/copy957';
import { layout957 } from '../generated/layouts/layout957';
import { palette957 } from '../generated/palettes/palette957';

const RuntimeView957 = withUniwind(View);

export function Screen957() {
	const tone = useCSSVariable('--color-content-primary');
	const resolvedStyle = useResolveClassNames('text-lg font-semibold text-gray-400');

	return (
		<View className="absolute inset-0 p-4 bg-pink-100 rounded-full opacity-90">
			<View className="size-13 bg-emerald-500 rounded-full" />
			<RuntimeView957 styleClassName={layout957.rhythm} />
			<Pressable className="px-5 py-4 bg-purple-400 active:bg-purple-700 rounded-md">
				<Text className="text-lg font-semibold text-gray-400" style={resolvedStyle}>{copy957.title}</Text>
			</Pressable>
			<Text className="text-sm text-gray-700 italic underline tracking-normal">
				{copy957.detail} / {palette957.name} / {String(tone ?? 'unset')}
			</Text>
		</View>
	);
}
