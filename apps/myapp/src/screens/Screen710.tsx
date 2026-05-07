import { withUniwind, useCSSVariable, useResolveClassNames } from 'uniwind';
import { Pressable, Text, View } from 'uniwind/components';

import { copy710 } from '../generated/copy/copy710';
import { layout710 } from '../generated/layouts/layout710';
import { palette710 } from '../generated/palettes/palette710';

const RuntimeView710 = withUniwind(View);

export function Screen710() {
	const tone = useCSSVariable('--color-content-primary');
	const resolvedStyle = useResolveClassNames('text-base font-semibold text-gray-900');

	return (
		<View className="relative flex p-8 bg-indigo-50 rounded shadow-2xl">
			<View className="size-6 bg-blue-300 rounded-full" />
			<RuntimeView710 styleClassName={layout710.rhythm} />
			<Pressable className="px-4 py-1 bg-purple-900 active:bg-purple-700 rounded-md">
				<Text className="text-base font-semibold text-gray-900" style={resolvedStyle}>{copy710.title}</Text>
			</Pressable>
			<Text className="text-sm text-gray-700 italic underline tracking-normal">
				{copy710.detail} / {palette710.name} / {String(tone ?? 'unset')}
			</Text>
		</View>
	);
}
