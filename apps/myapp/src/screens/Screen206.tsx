import { withUniwind, useCSSVariable, useResolveClassNames } from 'uniwind';
import { Pressable, Text, View } from 'uniwind/components';

import { copy206 } from '../generated/copy/copy206';
import { layout206 } from '../generated/layouts/layout206';
import { palette206 } from '../generated/palettes/palette206';

const RuntimeView206 = withUniwind(View);

export function Screen206() {
	const tone = useCSSVariable('--color-content-primary');
	const resolvedStyle = useResolveClassNames('text-base font-semibold text-gray-900');

	return (
		<View className="relative flex p-8 bg-indigo-50 rounded shadow-2xl">
			<View className="size-6 bg-blue-300 rounded-full" />
			<RuntimeView206 styleClassName={layout206.rhythm} />
			<Pressable className="px-4 py-1 bg-purple-900 active:bg-purple-700 rounded-md">
				<Text className="text-base font-semibold text-gray-900" style={resolvedStyle}>{copy206.title}</Text>
			</Pressable>
			<Text className="text-sm text-gray-700 italic underline tracking-normal">
				{copy206.detail} / {palette206.name} / {String(tone ?? 'unset')}
			</Text>
		</View>
	);
}
