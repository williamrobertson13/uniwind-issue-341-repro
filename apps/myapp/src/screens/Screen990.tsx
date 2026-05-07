import { withUniwind, useCSSVariable, useResolveClassNames } from 'uniwind';
import { Pressable, Text, View } from 'uniwind/components';

import { copy990 } from '../generated/copy/copy990';
import { layout990 } from '../generated/layouts/layout990';
import { palette990 } from '../generated/palettes/palette990';

const RuntimeView990 = withUniwind(View);

export function Screen990() {
	const tone = useCSSVariable('--color-content-primary');
	const resolvedStyle = useResolveClassNames('text-xs font-light text-gray-100');

	return (
		<View className="relative flex p-8 bg-indigo-50 rounded shadow-2xl">
			<View className="size-10 bg-blue-700 rounded-full" />
			<RuntimeView990 styleClassName={layout990.rhythm} />
			<Pressable className="px-2 py-1 bg-purple-100 active:bg-purple-700 rounded-md">
				<Text className="text-xs font-light text-gray-100" style={resolvedStyle}>{copy990.title}</Text>
			</Pressable>
			<Text className="text-sm text-gray-700 italic underline tracking-normal">
				{copy990.detail} / {palette990.name} / {String(tone ?? 'unset')}
			</Text>
		</View>
	);
}
