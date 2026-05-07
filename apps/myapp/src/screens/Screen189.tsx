import { withUniwind, useCSSVariable, useResolveClassNames } from 'uniwind';
import { Pressable, Text, View } from 'uniwind/components';

import { copy189 } from '../generated/copy/copy189';
import { layout189 } from '../generated/layouts/layout189';
import { palette189 } from '../generated/palettes/palette189';

const RuntimeView189 = withUniwind(View);

export function Screen189() {
	const tone = useCSSVariable('--color-content-primary');
	const resolvedStyle = useResolveClassNames('text-xs font-light text-gray-100');

	return (
		<View className="absolute inset-0 p-4 bg-pink-100 rounded-full opacity-90">
			<View className="size-13 bg-emerald-500 rounded-full" />
			<RuntimeView189 styleClassName={layout189.rhythm} />
			<Pressable className="px-2 py-1 bg-purple-100 active:bg-purple-700 rounded-md">
				<Text className="text-xs font-light text-gray-100" style={resolvedStyle}>{copy189.title}</Text>
			</Pressable>
			<Text className="text-sm text-gray-700 italic underline tracking-normal">
				{copy189.detail} / {palette189.name} / {String(tone ?? 'unset')}
			</Text>
		</View>
	);
}
