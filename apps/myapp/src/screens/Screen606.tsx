import { withUniwind, useCSSVariable, useResolveClassNames } from 'uniwind';
import { Pressable, Text, View } from 'uniwind/components';

import { copy606 } from '../generated/copy/copy606';
import { layout606 } from '../generated/layouts/layout606';
import { palette606 } from '../generated/palettes/palette606';

const RuntimeView606 = withUniwind(View);

export function Screen606() {
	const tone = useCSSVariable('--color-content-primary');
	const resolvedStyle = useResolveClassNames('text-lg font-semibold text-gray-400');

	return (
		<View className="relative flex p-8 bg-indigo-50 rounded shadow-2xl">
			<View className="size-10 bg-blue-700 rounded-full" />
			<RuntimeView606 styleClassName={layout606.rhythm} />
			<Pressable className="px-5 py-4 bg-purple-400 active:bg-purple-700 rounded-md">
				<Text className="text-lg font-semibold text-gray-400" style={resolvedStyle}>{copy606.title}</Text>
			</Pressable>
			<Text className="text-sm text-gray-700 italic underline tracking-normal">
				{copy606.detail} / {palette606.name} / {String(tone ?? 'unset')}
			</Text>
		</View>
	);
}
