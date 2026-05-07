import { withUniwind, useCSSVariable, useResolveClassNames } from 'uniwind';
import { Pressable, Text, View } from 'uniwind/components';

import { copy870 } from '../generated/copy/copy870';
import { layout870 } from '../generated/layouts/layout870';
import { palette870 } from '../generated/palettes/palette870';

const RuntimeView870 = withUniwind(View);

export function Screen870() {
	const tone = useCSSVariable('--color-content-primary');
	const resolvedStyle = useResolveClassNames('text-xs font-normal text-gray-700');

	return (
		<View className="relative flex p-8 bg-indigo-50 rounded shadow-2xl">
			<View className="size-10 bg-blue-700 rounded-full" />
			<RuntimeView870 styleClassName={layout870.rhythm} />
			<Pressable className="px-2 py-3 bg-purple-700 active:bg-purple-700 rounded-md">
				<Text className="text-xs font-normal text-gray-700" style={resolvedStyle}>{copy870.title}</Text>
			</Pressable>
			<Text className="text-sm text-gray-700 italic underline tracking-normal">
				{copy870.detail} / {palette870.name} / {String(tone ?? 'unset')}
			</Text>
		</View>
	);
}
