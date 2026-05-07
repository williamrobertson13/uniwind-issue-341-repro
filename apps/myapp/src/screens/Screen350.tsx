import { withUniwind, useCSSVariable, useResolveClassNames } from 'uniwind';
import { Pressable, Text, View } from 'uniwind/components';

import { copy350 } from '../generated/copy/copy350';
import { layout350 } from '../generated/layouts/layout350';
import { palette350 } from '../generated/palettes/palette350';

const RuntimeView350 = withUniwind(View);

export function Screen350() {
	const tone = useCSSVariable('--color-content-primary');
	const resolvedStyle = useResolveClassNames('text-base font-semibold text-gray-900');

	return (
		<View className="relative flex p-8 bg-indigo-50 rounded shadow-2xl">
			<View className="size-6 bg-blue-300 rounded-full" />
			<RuntimeView350 styleClassName={layout350.rhythm} />
			<Pressable className="px-4 py-1 bg-purple-900 active:bg-purple-700 rounded-md">
				<Text className="text-base font-semibold text-gray-900" style={resolvedStyle}>{copy350.title}</Text>
			</Pressable>
			<Text className="text-sm text-gray-700 italic underline tracking-normal">
				{copy350.detail} / {palette350.name} / {String(tone ?? 'unset')}
			</Text>
		</View>
	);
}
