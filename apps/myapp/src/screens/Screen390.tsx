import { withUniwind, useCSSVariable, useResolveClassNames } from 'uniwind';
import { Pressable, Text, View } from 'uniwind/components';

import { copy390 } from '../generated/copy/copy390';
import { layout390 } from '../generated/layouts/layout390';
import { palette390 } from '../generated/palettes/palette390';

const RuntimeView390 = withUniwind(View);

export function Screen390() {
	const tone = useCSSVariable('--color-content-primary');
	const resolvedStyle = useResolveClassNames('text-lg font-semibold text-gray-400');

	return (
		<View className="relative flex p-8 bg-indigo-50 rounded shadow-2xl">
			<View className="size-10 bg-blue-700 rounded-full" />
			<RuntimeView390 styleClassName={layout390.rhythm} />
			<Pressable className="px-5 py-4 bg-purple-400 active:bg-purple-700 rounded-md">
				<Text className="text-lg font-semibold text-gray-400" style={resolvedStyle}>{copy390.title}</Text>
			</Pressable>
			<Text className="text-sm text-gray-700 italic underline tracking-normal">
				{copy390.detail} / {palette390.name} / {String(tone ?? 'unset')}
			</Text>
		</View>
	);
}
